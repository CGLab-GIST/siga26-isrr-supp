const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/staircase2Wide_path_160sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/staircase2Wide_ours_160sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/staircase2Wide_pt_2124spp.png"
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
                        "640",
                        "2124 (68% skipped)",
                        "2124"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "2.649",
                        "2.665",
                        "8.877"
                    ]
                },
				{
                    "label": "MSE (×10⁻⁴)",
                    "data": [
                        "8.5078",
                        "1.3198",
                        "2.6201"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×6.41",
                        "-"
                    ]
                }
            ]
        }
    ]
}