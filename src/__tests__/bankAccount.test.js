 import bankAccount from '../bankAccount'

 describe('Bank account methods and properties', () => {
     beforeEach(() => {
         bankAccount.balance = 1000
     })

     test('initial balance is 1000', () => {
         expect(bankAccount.balance).toBe(1000)
     })

     test('deposit money should correctly alter our balance', () => {
         bankAccount.depositMoney(1000)
         expect(bankAccount.balance).toBe(2000)
     })

     test('withdraw correctly alters balance', () => {
         bankAccount.withdrawMoney(5000)
         expect(bankAccount.balance).toBe(-4000)
     })
 })

