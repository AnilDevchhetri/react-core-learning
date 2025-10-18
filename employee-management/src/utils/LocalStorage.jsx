const employees = [
    {
        "id": "1",
        "firstName": "Alice",
        "email": "e@gmail.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Prepare sales report",
                "description": "Compile and summarize Q3 sales data for management review.",
                "date": "2025-10-10",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client follow-up calls",
                "description": "Contact 10 key clients to gather feedback on new service rollout.",
                "date": "2025-10-08",
                "category": "Communication",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Prepare presentation slides",
                "description": "Design PowerPoint slides for the upcoming sales meeting.",
                "date": "2025-10-15",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update CRM data",
                "description": "Clean up outdated contact info and add new client details.",
                "date": "2025-10-12",
                "category": "Data Entry",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": "2",
        "firstName": "Brian",
        "email": "employee2@gmail.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Organize team meeting",
                "description": "Set up next week’s team sync and prepare agenda points.",
                "date": "2025-10-11",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Social media campaign plan",
                "description": "Create strategy for holiday promotion campaign on social media.",
                "date": "2025-10-20",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Email newsletter draft",
                "description": "Write October’s product update email for customer mailing list.",
                "date": "2025-10-09",
                "category": "Communication",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": "3",
        "firstName": "Charlie",
        "email": "employee3@gmail.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Fix login bug",
                "description": "Resolve reported issue where users cannot reset passwords.",
                "date": "2025-10-07",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Implement dark mode",
                "description": "Add theme toggle option for better UX at night.",
                "date": "2025-10-25",
                "category": "UI/UX",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Database optimization",
                "description": "Optimize queries to improve app load times.",
                "date": "2025-10-17",
                "category": "Backend",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update documentation",
                "description": "Add API usage examples and update endpoints info.",
                "date": "2025-10-16",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Resolve security warnings",
                "description": "Patch dependencies flagged in npm audit report.",
                "date": "2025-10-14",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": "4",
        "firstName": "Diana",
        "email": "employee4@gmail.com",
        "password": "123",
        "taskCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Prepare budget proposal",
                "description": "Estimate Q4 budget for marketing activities.",
                "date": "2025-10-13",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Vendor negotiation",
                "description": "Discuss contract renewal terms with advertising agency.",
                "date": "2025-10-19",
                "category": "Operations",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Event logistics planning",
                "description": "Coordinate venue and materials for upcoming seminar.",
                "date": "2025-10-22",
                "category": "Event Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": "5",
        "firstName": "Ethan",
        "email": "employee5@gmail.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Server maintenance",
                "description": "Perform routine server maintenance and apply security patches.",
                "date": "2025-10-10",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Network performance monitoring",
                "description": "Check for latency issues and optimize routing paths.",
                "date": "2025-10-09",
                "category": "Networking",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Setup new employee accounts",
                "description": "Create email and system accounts for new hires.",
                "date": "2025-10-11",
                "category": "Support",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "System backup verification",
                "description": "Ensure all daily backups are successful and complete.",
                "date": "2025-10-08",
                "category": "Maintenance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": "1",
        "email": "admin@gmail.com",
        "password": "123",
        "firstName": "Admin"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};
