import { TokenType } from "./TokenType"
import { UserDataType } from "./UserDataType"

export interface AuthType {
    loading: boolean
    globalLoading: boolean
    userData: UserDataType
    token: TokenType

    login: (email:string, password:string) => Promise<void>
    logout: () => Promise<void>
}