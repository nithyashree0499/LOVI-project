import {  useState ,useMemo} from "react";
import data from './api-data.json';
import Pagination from './Pagination.js';
import RowsPerPage from './RowsPerPage.js'
import 'material-icons/iconfont/material-icons.css';
export default function App() {
 const[pageSize,setPageSize] = useState(25);
 const[id,setId]= useState();
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,pageSize]);
  let sortBy = require('sort-by');
 const users = [...data];
  users.sort(sortBy('name'));
   

  const onSelectChange= (e)=>{

    setPageSize(e.target.value)
  }
  function handleClick(e) {  
   
    setId(...id, e.target.value)
    
  }
  const handleSubmit = e => {
    e.preventDefault();
    handleClick();
  }
 const handleKeyDown = e => {
     if(e.keyCode === 13){
     setId(e.target.value)
     
     }

 }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center mt-8 mb-10">
      
          <div className=" flex-grow shadow overflow-auto border-b border-gray-200 w-6/12 h-85  sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>

              <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>

                <tr>
                  
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs  bg-gray-200 font-medium text-black uppercase tracking-wider"
                    
                    >
                   <button type="button" onClick={users.name} className="px-6 py-3 text-left text-xs  bg-gray-200 font-medium text-black uppercase tracking-wider"
                    > Country</button>

                  </th>
                  
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs  bg-gray-200 font-medium text-black uppercase tracking-wider"
                  >
                    Capital
                  </th>
                  
                   
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs  bg-gray-200 font-medium text-black uppercase tracking-wider"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs  bg-gray-200 font-medium text-black uppercase tracking-wider"
                  >
                    Population
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs  bg-gray-200 font-medium text-black uppercase tracking-wider"
                  >
                   ID
                   </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y overflow-y-scroll">
                 
              {currentTableData.map(item => {
            return (
                  <tr key={item.name}>
                    <td className="px-6 py-6 whitespace-nowrap">
                      
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.capital}</div>
                      
                    </td>
                    
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="text-sm text-gray-900">{item.currency}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.population}</div>
                      
                    </td>
                    
                    <td className="px-3 py-4 place-items-center whitespace-nowrap">
                   
                     <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} >
                    <input type="text"  


   class="
        form-control
        float-right
        w-60
        px-1
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-gray-200  bg-clip-padding
        border border-solid border-gray-50
        rounded
        transition
        ease-in-out
        mr-6
        focus:text-gray-600 focus:bg-red-100 focus:border-gray-500 focus:outline-none
      "
      id=""
      
      placeholder=""
      onChange={handleClick}
    />

   
       
         
       
                        </form>
                    </td>
                  </tr>
                );
            })}
                <script src="https://unpkg.com/flowbite@latest/dist/flowbite.bundle.js"></script>

              </tbody>
              <tfoot className="bg-gray-300">
                <tr>
                  <th
                    scope="col"
                    className="px-8 py-3 text-right text-xs font-medium text-black uppercase tracking-wider"
                  >
                     Rows per page:  
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                     <RowsPerPage 
                      
                      pageSize= {pageSize}
                      onSelectChange= {onSelectChange}/>  
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3 text-right text-mt-4 text-xs font-medium text-black  tracking-wider"
                  >
                
                   </th>
                  <th
                    scope="col"
                    className="px-8 py-3 text-left text-mr-4 text-xs font-medium text-black tracking-wider">
                   
                  
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3 text-left text-mt-4 text-xs font-medium text-black uppercase tracking-wider"
                  >
                   <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      /> 
                  </th>
                </tr>

              </tfoot>


            </table>
          </div>
        </div>
      
  );
}
