import { Routes } from "@angular/router";
import { IndexComponent } from "./module/book/index/index.component";
import { EditComponent } from "./module/book/edit/edit.component";
import { createComponent } from "@angular/core";
import { CreateComponent } from "./module/book/create/create.component";


export const routes: Routes = [
    { path: '', redirectTo: 'books/index', pathMatch: 'full'},
    { path: 'books/index', component: IndexComponent },
    { path: 'books/create', component: CreateComponent },
    { path: 'books/:isbn/edit', component: EditComponent }
];
