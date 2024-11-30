import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import React from 'react'

interface UserContextType {
    userName: string;
    setUserName: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = (
    { children }: { children: ReactNode }
) => {
    const [userName, setUserName] = useState("dima loko");

    return (
        <UserContext.Provider value={{ userName: userName, setUserName: setUserName }}>
            {children}
        </UserContext.Provider>
    )
}


class UserRestrictions {
    betsStatus: "open" | 'closed' | 'inProgress' = 'open'
    isBettingAllowed: boolean = false;
    isAdsPersonalized: boolean = true;
}

const UserContext2 = createContext<UserRestrictions>(new UserRestrictions());

const UserProvider2 = (
    { children }: { children: ReactNode }
) => {
    const [getUserRestrictions, setUserRestrictions] = useState<UserRestrictions>(new UserRestrictions());

    return (
        <UserContext2.Provider value={{
            betsStatus: getUserRestrictions.betsStatus,
            isBettingAllowed: getUserRestrictions.isBettingAllowed,
            isAdsPersonalized: getUserRestrictions.isAdsPersonalized
        }}>
            {children}
        </UserContext2.Provider>
    )
}

export { UserContext, UserProvider, UserContext2, UserProvider2 }