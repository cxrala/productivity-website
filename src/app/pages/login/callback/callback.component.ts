import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, mergeMap, take, tap } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'app-callback',
    templateUrl: './callback.component.html',
    styleUrls: ['./callback.component.scss']
})
export class CallbackComponent {
    theJwt: any;
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
        const paramMapQuery = this.route.queryParamMap;

        combineLatest([
            paramMapQuery, paramMapQuery.pipe(
                map(paramMap => paramMap.get("jwt")),
                tap(this.userService.setJwt.bind(userService)),
                mergeMap(this.userService.getUserData.bind(userService))
            )
        ]).subscribe(v => {
            this.router.navigateByUrl(v[0].get("success_redirect") as string);
        });
    }
}
