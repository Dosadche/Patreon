import { Startup } from "./startup.model"

export class User{
    name: string
    balance: number

    constructor(user: Partial<User> = {}){
        this.name = user.name
        this.balance = user.balance
    }
}

export class Founder extends User{
    startups: Startup[]

    constructor(founder: Partial<Founder> = {}){
        super()
        this.startups = founder.startups
    }

    public createStartup(id: number, nameOfStartup: string, goal: string, requiredSum: number, currentSum = 0){
        const startup = {
            id: id,
            nameOfStartup: nameOfStartup,
            goal: goal,
            requiredSum: requiredSum,
            currentSum: currentSum
        }

        return new Startup(startup) && console.log(this.name + 'creates new startup')
    }

    public sendRegard(patreon: Patreon){
        console.log(this.name + ' sends regards to ' + patreon.name)
    }

}

export class Patreon extends User{

    donateToStartup(founder: Founder, startup: Startup, sum: number){
        if(sum>this.balance){
            console.log(this.name + ' tried to donate some money on ' + founder.name +'`s startup, but didn`t sucseed')
        } else {
            this.balance -= sum
            startup.currentSum += sum
            founder.balance += sum

            founder.sendRegard(this)
        }
    }
}

