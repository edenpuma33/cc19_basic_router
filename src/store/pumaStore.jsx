import { create } from "zustand"

// Step 1 Create Store
const pumaStore = (set) => ({
    firstName: 'worachot',
    lastName: 'paijinda',
    goal: 'Goal !!!',
    address: {street: '1234', zipcode:'567'},
    profile: ['worachot','paijinda'],
    products: [
        {id:1, title:'APPLE', price:40000},
        {id:2, title:'SAMSUNG', price:20000},
        {id:3, title:'OPPO', price:5000},
        {id:4, title:'MSI', price:30000},
    ],
    number: 5,
    actionIncrease: () => {
        console.log('Easy!!!')
        set((state)=>({number:state.number+1}))
    },
    actionDecrease: () => {
        console.log('Hello, Decrease')
        set((state)=>({number:state.number-1}))
    },
    actionMultiply: () => {
        set((state)=>({number:state.number*2}))
    },
    actionDevide: () => {
        set((state)=>({number:state.number/2}))
    },
    actionGoal:() => {
        set((state)=>({goal:state.goal +'!'}))
    },
});

const usePumaStore = create(pumaStore)

export default usePumaStore