import { Outlet } from "react-router-dom";

  export default function Rootlayout(){
    return(
        <div className="Root">
            <main>
                <Outlet/>
            </main>
        </div>
    )
  }