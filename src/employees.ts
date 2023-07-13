interface IEmployee {
  firstName: string
  lastName: string
  age: number
  cool?: boolean
  apps: { appName: string, production: boolean } 
}

interface IManager extends IEmployee {
  salaryTier: number
}

let student1: IEmployee = {
  firstName: 'Dan',
  lastName: 'Smith',
  age: 25,
  cool: true,
  apps: { appName: 'CF Akeneo' , production: true },
}

let manager1: IManager = {
  firstName: 'Dan',
  lastName: 'Smith',
  age: 25,
  cool: true,
  apps: { appName: 'CF Akeneo' , production: true },
  salaryTier: 2,
}