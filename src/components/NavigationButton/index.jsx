export default function NavigationButton({children, action}){
    return <button onClick={action} className="text-xl text-primary-color cursor-pointer">{children}</button>
}