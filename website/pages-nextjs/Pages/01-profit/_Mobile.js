import MainMobileLayout from 'layouts/Mobile/MainMobileLayout'
import ProfitPageContent from '@pages/01-profit/Components/ProfitPageContent'

function ProfitMobilePage() {
  return (
    <>
      <ProfitPageContent />
    </>
  )
}

export default MainMobileLayout(ProfitMobilePage)
