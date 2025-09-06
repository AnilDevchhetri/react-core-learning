export function Tabs(props) {
    const tabs = ['All', 'Open', 'Completed']
    const { todos, setSelectedTab, selectedTab } = props;
    return (
        <nav className="tab-container">
            {
                tabs.map((tab, index) => {
                    const numOfTask = tab === 'All' ?
                        todos.length :
                        tab === 'Open' ?
                            todos.filter(val => !val.complete).length :
                            todos.filter(val => val.complete).length
                    return (
                        <button onClick={() => { setSelectedTab(tab) }} className={"tab-button " + (tab == selectedTab ? 'tab-selected' : '')} key={index}><h4>{tab} <span>({numOfTask})</span></h4></button>
                    )
                })

            }
            < hr />
        </nav>
    )
}