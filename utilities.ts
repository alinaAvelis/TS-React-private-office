export function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

let nextId = 1;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

export function deleteScript(string: string) {
  if(string.includes("<script")) {
    return string.replace(/<script/g, "");
     
  } else {
    return string;
  }
  
}