export const deconObj = (obj: any, target: any) => {
  for (const [key, value] of Object.entries(target)) {
    obj[key] = value
  }
}
