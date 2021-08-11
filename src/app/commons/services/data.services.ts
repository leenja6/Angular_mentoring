import { HttpClient } from '@angular/common/http'
import { Injectable, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Courses } from '../interface/interface'

@Injectable({ providedIn: 'root' })
export class DataServices {
    constructor(private http: HttpClient) {}

    fetchCourses(): Observable<Courses[]> {
        return this.http.get<Courses[]>('http://localhost:3004/courses')
    }

    deleteCourses(id: Courses): Observable<Courses[]> {
        return this.http.delete<Courses[]>(
            `http://localhost:3004/courses/${id}`
        )
    }
}
