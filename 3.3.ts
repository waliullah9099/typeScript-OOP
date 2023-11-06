{
    // type gards

    // typeof

    type AlphaNumeeic = string | number;
    const add = (param1: AlphaNumeeic, param2: AlphaNumeeic): AlphaNumeeic => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }
    const result = add(2, 3);
    const result1 = add(2, '3');

    // in guard
    type NormalUser = {
        name: string
    }
    interface AdminUser {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) =>{
       if ('role' in user) {
         console.log(`This is ${user.name} and my role is ${user.role}`);
       }else {
        console.log(`This is ${user.name}`);
       }
    }

    const normalUser : NormalUser = {
        name: 'sei'
    }
    const admonUser : AdminUser = {
        name: 'koi',
        role: 'admin'
    }

    getUser(normalUser);
    
















}