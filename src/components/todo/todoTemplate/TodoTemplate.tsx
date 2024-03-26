import "./TodoTemplate.css";

export default function TodoTemplate( {children}: {children: React.ReactNode} ) {
    return (
        <div className="item-contianer">{children}</div>
    );
}