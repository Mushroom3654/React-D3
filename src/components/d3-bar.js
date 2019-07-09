import  React, {Component} from 'react';
import * as d3 from 'd3'
import './d3-bar.css'

class D3Bar extends Component {
    componentDidMount() {
        //    this.drawChart();
    }
    drawChart(){
        const w = this.props.width;
        const h = this.props.height;

        //body 안에 svg 생성
        const svg = d3.select("div").append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 100);

        //bar 란 태그 생성
        svg.selectAll("bar")
            .data(this.props.data)
            .enter()
            // 바 차트 생성
            .append("rect")
            // d = 데이터 포인트 값, i = 데이터 포인트 인덱스
            // 막대 사이의 거리를 조절함
            .attr("x", (d, i)=> i * 70)
            // svg 위치는 위에서 아래로 시작하므로
            // 0 을 설정하면 막대가 위에서부터 자람
            // svg 의 height 가 300이기 때문에 300에서 빼줌
            .attr("y", (d, i ) => h - 10 * d)
            //막대 넓이 조절
            .attr("width", 65)
            //막대 높이 조절
            .attr("height", (d,i)=>10*d)
            //색깔
            .attr("fill", "green")
            .on("mouseover", function(d){
              tooltip
                  .style('display', 'inline')
            })
            .on("mousemove", function (d) {
                tooltip
                    .html(`Data = ${d}`)
                    // 마우스 올릴시 툴팁 위치 지정
                    .style('left', `${d3.event.pageX - 74}px`)
                    .style('top', `${d3.event.pageY - 28}px`)
                    // css 로 빼버릴 스타일들
                    // .style('position','absolute')
                    // .style('background-color', 'white')
            })
            .on("mouseout", function(){
               tooltip.style('display', 'none');
            });


        svg.selectAll("text")
            .data(this.props.data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 75)
            .attr("y", (d, i) => h - (10 * d) - 3);

        //tooltip - 마우스 올렸을시 나오는 이벤트
        const tooltip = d3.select("div").append("div")
            .attr('class', 'tooltip')
            .style('display', 'none');

    }
    render() {
        return (
            <div id={"#"+ this.props.id}>
                { this.drawChart() }
            </div>
        );
    }
}

export default D3Bar;