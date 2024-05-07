import { Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { NewComponent } from './new/new.component';

export const routes: Routes = [
    { path: "", component: ListingComponent },
    { path: "new", component: NewComponent },
    { path: "edit/:id", component: NewComponent }
];
