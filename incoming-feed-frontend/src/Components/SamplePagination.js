

import React from 'react'
import { Pagination } from 'semantic-ui-react'


const SamplePagination = () => (
  <Pagination
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={3}
  />
)

export default SamplePagination









































// class SamplePagination extends React.Component {

//   state = {
//     page: 1
//   }

//   renderArticles = () => {
//     this.props.articles.slice()
//   }

//   pageHandler = (page) => {
//     switch(page) {
//       case "first":
//         this.setState( { page: 1 } )
//         break;
//       case "previous":
//         if(this.state.page > 1){
//           this.setState( { page: this.state.page - 1 } );
//         };
//         break;
//       case "1":
//         this.setState( { page: 1 } );
//         break;
//       case "2":
//         this.setState( { page: 2 } );
//         break;
//       case "3":
//         this.setState( { page: 3 } );
//         break;
//       case "4":
//         this.setState( { page: 4 } );
//         break;
//       case "5":
//         this.setState( { page: 5 }  );
//         break;
//       case "next":
//         if(this.state.page < 5){
//           this.setState( { page: this.state.page + 1 } );
//         };
//         break;
//       case "last":
//         this.setState( { page: 5 } );
//         break;
//       default:
//         this.setState( { page: 1 } );
//         break;
//     }
//   }
  
  
//   render(){
//     console.log(this.state.results);
//     console.log(this.state.page);
//     return(
//       <div className="news-container">
//         {this.renderSearch()}
//         <div className="page-controller">
//           <button onClick={()=> this.pageHandler("first")}>First Page</button>
//           <button onClick={()=> this.pageHandler("previous")}>Previous Page</button>
//           <button onClick={()=> this.pageHandler("1")}>1</button>
//           <button onClick={()=> this.pageHandler("2")}>2</button>
//           <button onClick={()=> this.pageHandler("3")}>3</button>
//           <button onClick={()=> this.pageHandler("4")}>4</button>
//           <button onClick={()=> this.pageHandler("5")}>5</button>
//           <button onClick={()=> this.pageHandler("next")}>Next Page</button>
//           <button onClick={()=> this.pageHandler("last")}>Last Page</button>
//         </div>
//       </div>
//     )
//   }
  
// }

// export default SamplePagination;