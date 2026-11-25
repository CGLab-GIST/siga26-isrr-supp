const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/foggyBathroom_path_1280sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/foggyBathroom_ours_1280sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/foggyBathroom_pt_11796spp.png"
                },
                {
                    "title": "Reference",
                    "version": "-",
                    "image": "images/gt.png"
                }
            ]
        },
    ],
    "stats_short": [
        {
            "title": "Results",
            "labels": [
                "Baseline (equal-time)",
                "Ours",
                "Baseline (equal-sample)"],
            "series": [
                {
                    "label": "samples per pixel",
                    "data": [
                        "3232",
                        "11796 (73% skipped)",
                        "11796"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "21.324",
                        "21.284",
                        "78.899"
                    ]
                },
				{
                    "label": "MSE (×10⁻³)",
                    "data": [
                        "10.4387",
                        "0.7402",
                        "2.9518"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×14.13",
                        "-"
                    ]
                }
            ]
        }
    ]
}