import { CultureForm } from 'src/components/form/CultureForm'
import CultureList from 'src/components/list/CultureList'

export function CultureRoute() {
  return (
    <div className='flex'>
      <CultureList />
	  <CultureForm />
    </div>
  )
}
