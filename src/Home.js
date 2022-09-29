import "./Home.css"
function Home(){
    return(
        
        <div className="container">
            <h1>My Projects</h1>
       <a href="/calculator"> <div className="component">Calculator</div></a>
       <a href="/expense_tracker"> <div className="component">Expense Tracker</div></a>
       <a href="/crud_operation"> <div className="component">CRUD Operation</div></a>
    
        </div>
    )
    
}

export default Home;