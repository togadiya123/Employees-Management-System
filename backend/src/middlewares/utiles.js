export const matchRoute = (listRoute, userRoute) => {

    let validRoute = true;
    const listRouteArray = listRoute.split('/');
    const userRouteArray = userRoute.split('/');

    listRouteArray.forEach((eachRoute, index) => {
        !eachRoute.includes(":") && eachRoute !== userRouteArray[index] && validRoute && (validRoute = false)
    });

    return validRoute;
};

export const ROUTE_LIST = () => [{
    route: `/register`, eligibility: {
        admin: true, user: false
    }
}, {
    route: `/getAllUser`, eligibility: {
        admin: true, user: false
    }
}, {
    route: `/logIn`, eligibility: {
        admin: true, user: true
    }
}, {
    route: `/getUserInfo`, eligibility: {
        admin: true, user: true
    }
}, {
    route: `/applyToLeave`, eligibility: {
        admin: false, user: true
    }
}, {
    route: `/cancelLeave`, eligibility: {
        admin: false, user: true
    }
}, {
    route: `/editLeave`, eligibility: {
        admin: false, user: true
    }
}, {
    route: `/rejectLeave`, eligibility: {
        admin: true, user: false
    }
}, {
    route: `/approveLeave`, eligibility: {
        admin: true, user: false
    }
}, {
    route: `/getLeavesList`, eligibility: {
        admin: true, user: true
    }
}, {
    route: `/getLeavesList/:taskId`, eligibility: {
        admin: true, user: true
    }
}, {
    route: `/logOut`, eligibility: {
        admin: true, user: true
    }
},];