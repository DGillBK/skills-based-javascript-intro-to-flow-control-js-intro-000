
function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  }
}
basicTeenager(10)

function teenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}
teenager(5)

function ageChecker(age) {
  if (age > 19) {
    return "You are a grownup"
  } else if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else {
    return "You are a kid"
  }
}
ageChecker(12)

function ternaryTeenager(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager"
}
ternaryTeenager(34)


function switchAge(age) {

}
