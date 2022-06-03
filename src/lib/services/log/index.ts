import { Service } from 'typedi'

@Service()
export default class LogService {
  consoleLog(message: string): void {
    console.log(message)
  }
}
