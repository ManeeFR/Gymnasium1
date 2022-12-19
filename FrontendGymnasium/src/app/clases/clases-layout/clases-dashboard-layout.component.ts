import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { ClasesService } from '../clases-service/clases.service';
import { Clase } from '../model/clase.interface';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from '../config';
import { CLASES } from '../../../db-data';
// import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
    selector: 'app-clases-dashboard-layout',
    templateUrl: './clases-dashboard-layout.component.html',
    styleUrls: ['./clases-dashboard-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // { provide: CONFIG_TOKEN, useFactory: () => APP_CONFIG }
        { provide: CONFIG_TOKEN, useValue: APP_CONFIG },
        ClasesService
    ],

})


export class ClasesDashboardLayoutComponent implements OnInit {

    // title: string = 'Project001';

    // listCourses: Course[] = COURSES; // Hard-coded data previously used


    // @ViewChild('card1Ref') card1!: CourseCardComponent;

    // @ViewChild('card2Ref', { read: ElementRef }) card2!: ElementRef;

    // @ViewChild('containerCourses') containerCourses!: ElementRef;


    // @ViewChildren(CourseCardComponent, { read: ElementRef }) cards!: QueryList<ElementRef>;

    // To check whether I can reference the <img> of course-image component
    // @ViewChild(CourseCardComponent, { read: ElementRef }) course1!: ElementRef;


    // References the first appHighlighted directive of the template
    // @ViewChild(HighlightedDirective) firstAppHighlighted!: HighlightedDirective;

    // References the first appHighlighted directive inside a CourseCardComponent
    // @ViewChild(CourseCardComponent, { read: HighlightedDirective } ) appHighlighted!: HighlightedDirective;

    // References all the appHighlighted directives
    // @ViewChildren(HighlightedDirective) appsHighlighted!: QueryList<HighlightedDirective>;

    // To use pipe async
    // courses$!: Observable<Clase[]>;

    clasesList!: Clase[];

    clasesCount = CLASES.filter((x: any) => x).length;


    constructor(private clasesService: ClasesService, private authService: AuthService,
                @Inject(CONFIG_TOKEN) private config: AppConfig,
                private injector: Injector,
                private ruta: Router) {

                    // console.log(this.coursesCount);
                    // this.ruta.navigate(["clases"]);

    }




    ngOnInit(): void {

        // this.courses$ = this.coursesService.loadCourses();

        this.clasesService.loadClases().subscribe((clases: any) => {
            this.clasesList = clases;
        });

        let aux = [...this.clasesList];
        this.clasesList = [...aux];

        if (this.authService.userLogged && this.authService.getToken() !== undefined) {

            this.ruta.navigate(["/clases"]);

        } else {
            this.ruta.navigate(["/login"]);
        }


        // const htmlElement = createCustomElement(CourseTitleComponent, { injector: this.injector });

        // customElements.define('course-title', htmlElement);
    }


    // onCourseSelected(): void {
    //     // To check whether I can reference the <img> of course-image component
    //     // this.course1.nativeElement.children[0].children[2].children[0].attributes[1].value = 900;
    // }


    onClaseEdited(clase: Clase): void {

        this.clasesService.saveClase(clase).subscribe();

        // this.courses$ = this.coursesService.loadCourses();

        // this.listCourses.push({
        //     id: 9,
        //     description: 'Angular Architecture Course',
        //     longDescription: "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
        //     imagen: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
        //     category: 'BEGINNER'
        // });

    }


    // ngAfterViewInit(): void {

    //     // this.cards.changes.subscribe(
    //     //     cards => console.log(cards)
    //     // );

    //     // // The two next lines reference the same directive:
    //     // console.log(this.firstAppHighlighted);
    //     // console.log(this.appsHighlighted.get(0));

    //     // // The two next lines reference the same directive:
    //     // console.log(this.appHighlighted);
    //     // console.log(this.appsHighlighted.get(1));

    // }


    clases(): Clase[] {

        // console.log(this.courses$);
        // return this.courses$.filter(x => x);
        // return this.courses$;
        return this.clasesList;

    }

    validClass(clase: Clase): boolean {

        return true;

    }


    // concreteStyles(first: boolean, last: boolean, even: boolean, odd: boolean): Object {
    //     return {'is-first': first,
    //             'is-last': last,
    //             'is-even': even,
    //             'is-odd': odd }
    // }

    concreteStyles(url: string) {

        return { 'background-image': 'url(' + url + ')',
                 'background-size': 'cover',
                 'background-repeat': 'round'
               };

    }

    // onToggle(display: boolean): void {

    //     // console.log('display');
    //     // console.log(display);

    // }


}
