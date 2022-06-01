import EditorPanel from "../components/editorpanel/index";
import Header from "../components/header/index";
import SideBar from "../components/sidebar/index";

export default function Editor(){
    return (
    <>
   <div className="h-screen bg-gray-100">
     <main className='h-5/6'>
          <Header/>
        <div className='h-full flex'>
          <SideBar/>
          <EditorPanel/>
        </div>
      </main>
   </div>
    </>
    )
}