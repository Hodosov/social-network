import React, { Suspense } from "react";

export const withSuspense = (Component) => {
return (props) => <Suspense fallback={<div>load</div>}><Component {...props}/></Suspense>
}