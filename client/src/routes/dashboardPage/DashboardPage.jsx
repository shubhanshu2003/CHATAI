import './dashboardPage.css'

const DashboardPage = () =>{

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const text = e.target.text.value;
        console.log(text)
        if(!text) return;

        await fetch("http://localhost:3000/api/chat",{
            method : "POST",
            headers :{
                "Content-Type" : "application/JSON",
            },
            body: JSON.stringify({text}),
        });
    };

    return(
        <div className="dashboardPage">
            <div className="texts">
                <div className="logo">
                    <img src="/logo.png" alt="" />
               <h1>ChatAI</h1>
                </div>
                <div className="options">
                    <div className="option">
                        <img src="/chat.png" alt="" />
                        <span>Create a New Chat</span>
                    </div>
                    <div className="option">
                        <img src="/image.png" alt="" />
                        <span>Analyze Image</span>
                    </div>
                    <div className="option">
                        <img src="/code.png" alt="" />
                        <span>Help me with my Code</span>
                    </div>
                </div>
            </div>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="text" placeholder='Ask me anything...' />
                    <button><img src="/arrow.png" alt="" /></button>
                </form>
            </div>
            
        </div>
    )
}

export default DashboardPage