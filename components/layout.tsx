interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (<div className="App">
        <div className="container">{children}</div>
    </div>);
}