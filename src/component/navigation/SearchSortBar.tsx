import _close from './../../assets/svg/close.svg'
import _search from './../../assets/svg/search-solid.svg'
interface ChildProps {
  handleHideSearch(): void
}
const SearchSortBar: React.FC<ChildProps> = (props) => { 
  return (
    <>
      <div className='flex justify-between px-8 py-2 bg-blue-300  items-center'>
        <div className='w-full px-12 flex justify-between items-center'>
          <img src={_search} alt='search' className='h-4 mr-4'/>
          <input type='text' className='form-input focus:ring-0 border-transparent focus:border-transparent bg-transparent  w-full ring-0 text-blue-700' placeholder='Search' />
        </div>
        <img src={_close} onClick={props.handleHideSearch} alt='search' className='w-4 mx-2 filter-green' style={{filter: 'invert(.75)'}}/>
      </div>
    </>
  )
}
export default SearchSortBar