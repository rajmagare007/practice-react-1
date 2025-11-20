import Menu from "./components/Cafe"
import Chai from "./assets/Images/chai.webp"
import Coffee from "./assets/Images/Coffee.jpg"
import Sandwich from "./assets/Images/sandwich.jpg"
import Toast from "./assets/Images/toast.jpg"

function App() {

  return (
    <>
    <div className="flex flex-wrap gap-4">
    <Menu image={Chai} menu={"Chai"} />
    <Menu image={Coffee} menu={"Coffee"} />
    <Menu image={Sandwich} menu={"Sandwich"} />
    <Menu image={Toast} menu={"Toast"} />
   <Menu image={""} menu={"Pasta"} />
   <Menu image={""} menu={"Pizza"} />
   </div>
    </>
  )
}

export default App
