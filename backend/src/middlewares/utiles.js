export const ROUTE_LIST = () => [
    {
        route: `/register`,
        eligibility: {
            admin: true,
            user: false
        }
    },
    {
        route: `/getAllUser`,
        eligibility: {
            admin: true,
            user: false
        }
    },
    {
        route: `/logIn`,
        eligibility: {
            admin: true,
            user: true
        }
    },
    {
        route: `/getUserInfo`,
        eligibility: {
            admin: true,
            user: true
        }
    },
    {
        route: `/applyToLeave`,
        eligibility: {
            admin: false,
            user: true
        }
    },
    {
        route: `/getLeavesList`,
        eligibility: {
            admin: true,
            user: true
        }
    },
    {
        route: `/logOut`,
        eligibility: {
            admin: true,
            user: true
        }
    },
];