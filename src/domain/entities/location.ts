export interface Location {
  country: string
  place: string
  goal: string
  id: number
}

export interface UpdateLocation {
  country: string
  place: string
  goal: string
}

export const NEW_LOCATION: UpdateLocation = {
  country: '',
  place: '',
  goal: '',
}

export function dateCompare(date: string): boolean {
  const goal = date.split('/')
  const today = new Date()

  if (goal[1] >= today.getFullYear().toString()) {
    if (goal[0] >= today.getMonth().toString()) {
      return true
    }
  }

  return false
}
