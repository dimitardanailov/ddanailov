// You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:


counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "2,en.wikipedia.org", // domain.split('.').reverse('') 
     "1,es.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

// Input 
// en.wikipedia.org
// .split('.')
// ['en', 'wikipedia', 'org'] // Completed
// array reverse
// ['org', 'wikipedia', 'en']
// tempString = ''
// ['org', 'wikipedia', 'en'].forEach (element -> )
// tempString = 'org' + '' -> org
// iterate counts or domains 
// tempString = 'wikepedia' + '.' + 'tempString' -> wikepedia.org
// iterate counts or domains
// Calculation from 1 + 2 and we should added to set

class Domain {
  constructor(raw) {
    const details = raw.split(',')

    this.clicks = parseInt(details[0])
    this.domains = details[1]
    this.subDomains = this.domains.split('.')
  }
}

class OutputData {
  constructor() {
    
    this.clicks = 0
    this.domain = ''
  }
}

function createDomains(counts) {
  const domains = []
  counts.forEach(function(count) {
    domains.push(new Domain(count))
  })
  
  return domains
}

const domains = createDomains(counts)
const uniqueDomains = new Set()

domains.forEach(domain => {
  const records = domain.subDomains.reverse()
  
  let tempString = ''
  let i = 0
  records.forEach(record => {
    if (i === 0) {
      tempString = record
    } else {
      tempString = record + '.' + tempString
    }
    
    uniqueDomains.add(tempString)
    
    i++
  })
})

// Iteration of uniqueDomains (set)
// Program will check with reg RegExp if 'com' is matching in google.com
// or wikipedia.org is matched in en.wikipedia.org
// Increase the counter
uniqueDomains.forEach(setElement => {
  let total = 0
  
  domains.forEach(domain => {
    // Reg exp should check to end of string
    let regExp = new RegExp(setElement)
    if (regExp.test(domain.domains)) {
      total = total + domain.clicks
    }
  })
  
  console.log(total + ',' + setElement)
})


// Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

// Sample output (in any order/format):

// calculateClicksByDomain(counts)
// 1320    com
//  900    google.com
//  410    yahoo.com
//   60    mail.yahoo.com
//   10    mobile.sports.yahoo.com
//   50    sports.yahoo.com
//   10    stackoverflow.com
//    3    org
//    3    wikipedia.org
//    2    en.wikipedia.org
//    1    es.wikipedia.org
//    1    mobile.sports
//    1    sports
//    1    uk
//    1    co.uk
//    1    google.co.uk


