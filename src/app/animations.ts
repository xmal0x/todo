import {
  transition,
  trigger,
  style,
  query,
  group,
  animate,
} from "@angular/animations";

const resetRoute = [
  style({ position: "relative" }),
  query(
    ":enter, :leave",
    [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      })
    ],
    { optional: true }
  )
];

export const slideInAnimation = trigger("routeAnimations", [
  transition("* => *", [
    ...resetRoute,
    query(":enter", [style({ opacity: 0 })], {
      optional: true
    }),
    group([
      query(
        ":leave",
        [style({ opacity: 1 }), animate("0.2s", style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ":enter",
        [style({ opacity: 0 }), animate("0.5s", style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ])
]);
