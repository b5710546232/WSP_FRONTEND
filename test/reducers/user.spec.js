import { expect } from '../test-helper'
import reducer from '../..//src/app/reducers/user'


describe('User Reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = {
      username: "",
      isLogin:localStorage.token!=null ? true:false,
      isRegister:false,
      accessToken:localStorage.token !==null?localStorage.token :null,
      userdata:null,
      change_password_success:false,
      is_admin:false
    }
  })

  it('should return correct initial state', () => {
    const expectedState = {
      username: "",
      isLogin:localStorage.token!=null ? true:false,
      isRegister:false,
      accessToken:localStorage.token !==null?localStorage.token :null,
      userdata:null,
      change_password_success:false,
      is_admin:false
    }

    expect(reducer(undefined, {})).to.deep.equal(expectedState)
  })
  describe('User login', () => {
   it('should receive accessToken when receive request success', () => {
     const actions = [
       {
         type: 'RECEIVE_ACCESS_TOKEN_SUCCESS',
         payload: {
           token: "1234",
         },
       }
     ]
     const nextState = actions.reduce(reducer, currentState)
     reducer(currentState, actions)
     const expectedState = {
       username: "",
       isLogin:true,
       isRegister:false,
       accessToken:"1234",
       userdata:null,
       change_password_success:false,
       is_admin:false
     }

     expect(nextState.accessToken).to.deep.equal(expectedState.accessToken)
   })
   //
   it('should loading the user data when', () => {
     const action = {
       type: 'LOAD_USER_DATA_SUCCESS',
       payload: {
         name:"tester01",first_name:"first_test01",last_name:"last_test01",username:"test01",id:0
       },
     }
     const expectedState = {
       username: "test01",
       isLogin:true,
       isRegister:false,
       accessToken:"1234",
       userdata: {name:"tester01",first_name:"first_test01",last_name:"last_test01",username:"test01",id:0},
       change_password_success:false,
       is_admin:false
     }
     const nextState = reducer(currentState, action)
     reducer(currentState, action)

     expect(nextState).to.deep.equal(expectedState)
   })
 })
 describe('User edit', () => {
   it('should changing the userdata after editing', () => {
     const action = {
       type: 'EDIT_USER_SUCCESS',
       payload: {
         name:"tester02",first_name:"first_test02",last_name:"last_test02",username:"test02",id:0
       },
     }
     const expectedState = {
       username: "test02",
       isLogin:true,
       isRegister:false,
       accessToken:"1234",
       userdata: {name:"tester02",first_name:"first_test02",last_name:"last_test02",username:"test02",id:0},
       change_password_success:false,
       is_admin:false
     }
     const nextState = reducer(currentState, action)
     reducer(currentState, action)

     expect(nextState).to.deep.equal(expectedState)
     })

     it('should not changing the userdata after editing fail', () => {
       const action = {
         type: 'EDIT_USER_FAILURE',
         payload: {}
       }
       const nextState = reducer(currentState, action)
       reducer(currentState, action)

       expect(nextState).to.deep.equal(currentState)
       })

  })
  describe('User Register', () => {
    it('should register state is true if success', () => {
      const action = {
        type: 'REGISTER_SUCCESS'
      }
      const expectedState = {
        isRegister:true
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)

      expect(nextState.isRegister).to.deep.equal(expectedState.isRegister)
    })
    it('should not register state is not change if register is failure', () => {
      const action = {
        type: 'REGISTER_FAILURE'
      }
      const nextState = reducer(currentState, action)
      reducer(currentState, action)

      expect(nextState.isRegister).to.deep.equal(currentState.isRegister)
    })
  })
})
