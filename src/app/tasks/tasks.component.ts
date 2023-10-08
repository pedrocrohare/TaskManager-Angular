import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';


interface Task {
  title: string,
  id: string,
  uid: string
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {


  tasks$: Observable<Task[]>;
  constructor(private firestore: Firestore) {


    this.tasks$ = new Observable<Task[]>();
    console.log(firestore);

  }
  ngOnInit(): void {
  const tasksCollection = collection(this.firestore, 'tasks');
  this.tasks$ = collectionData(tasksCollection, { idField: 'id' }).pipe(
    map(tasks => tasks.map(task => ({
      id: task.id,
      title: task['title'],
      uid: task['uid'],
      // ...other fields
    }) as Task))
  );
  }
}
