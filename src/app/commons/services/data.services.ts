import { HttpClient } from '@angular/common/http'
import { Injectable, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from '../interface/interface'

@Injectable({ providedIn: 'root' })
export class DataServices {
    constructor(private http: HttpClient) {}

    fetchCourses(): Observable<Course[]> {
        return this.http.get<Course[]>('http://localhost:3004/courses')
    }

    deleteCourses(id: Course): Observable<Course[]> {
        return this.http.delete<Course[]>(`http://localhost:3004/courses/${id}`)
    }
}
