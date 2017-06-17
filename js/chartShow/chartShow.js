/*
 * @Author: leon.yan 
 * @Date: 2017-06-18 00:19:29 
 * @Last Modified by:   leon.yan 
 * @Last Modified time: 2017-06-18 00:19:29 
 */
define(["text!tels/chartShow/chartShow.html","eChart"], function (chartShow,echarts) {
    return function (API, template) {
        API.getTeacherList(function (x) {
            var arr = [{
                    name: "male",
                    value: 0
                },
                {
                    name: "famale",
                    value: 0
                },
                {
                    name: "unknow",
                    value: 0
                }
            ]
            x.forEach(function (value) {
                if (value.tc_gender == 0) {
                    arr[0].value++;
                } else if (value.tc_gender == "") {
                    arr[2].value++;
                } else {
                    arr[1].value++;
                }
            });
            var obj =  $(chartShow);
            obj.appendTo(".showPart");
            var myChart = echarts.init(obj.find("#main").get(0));
            var option = {
                title: {
                    text: '讲师男女比例图',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x: 'center',
                    y: 'bottom',
                    data: ["male", "famale", "unknow"]
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                series: [{
                        name: '半径模式',
                        type: 'pie',
                        radius: [20, 110],
                        center: ['25%', '50%'],
                        roseType: 'radius',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: arr
                    },
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['75%', '50%'],
                        roseType: 'area',
                        data: arr
                    }
                ]
            };
            myChart.setOption(option);
        })
    }
})