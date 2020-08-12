import MainMobileLayout from '@ddanailov/layouts/Mobile/MainMobileLayout'

import {ContactsPageContent} from '@contacts/Components'

function ContactsMobilePage() {
  return (
    <>
      <ContactsPageContent />
    </>
  )
}

export default MainMobileLayout(ContactsMobilePage)
