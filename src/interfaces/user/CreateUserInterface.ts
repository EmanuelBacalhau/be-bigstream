export interface CreateUserInterface {
  avatarUrl?: string
  first_name: string
  last_name:  string
  phone:      string
  email:      string
  password:   string
  weight:     number
  height:     number
  role?:       string
}
