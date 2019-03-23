var redraw;
var key = 1337;
var step = 1;
var level = 1;
var arr = [];
generateTask = function() {
    var width = $(document).width();
    var height = $(document).height() - 160;
    key = Number(document.getElementById("input_key").value);
    console.log(key);
    level = Number(document.getElementById("input_level").value);
    console.log(level);
    key = parseInt(key, 10);
    if (key == NaN)
        key = 1337;
    var render = function(r, n) {
            var set = r.set().push(
                r.rect(n.point[0]-15, n.point[1]-5, 30, 30).attr({"fill": "#feb", r : "12px", "stroke-width" : "1px" })).push(
                r.text(n.point[0], n.point[1] + 10, (n.label || n.id) + "\n"));
            return set;
        };
    
    var g = new Graph();
    
    g.edgeFactory.template.style.directed = true;
    g.edgeFactory.build = function(source, target) {
        var e = jQuery.extend(true, {}, this.template);
        e.source = source;
        e.target = target;
        e.style.label = e.weight = rand1();
        return e;
    }
    if (level == 1) {
            g.addNode("A", {render:render}); 
            g.addNode("B", {render:render});
            g.addNode("C", {render:render});
            g.addNode("D", {render:render});

            g.addEdge("A", "B");
            g.addEdge("A", "C");
            g.addEdge("C", "B");
            g.addEdge("C", "D");
            g.addEdge("B", "D");       
    } else if (level == 2) {
             g.addNode("A", {render:render});
            g.addNode("B", {render:render});
            g.addNode("C", {render:render});
            g.addNode("D", {render:render});
            g.addNode("E", {render:render});
            g.addNode("F", {render:render});

            g.addEdge("A", "B");
            g.addEdge("A", "C");
            g.addEdge("B", "E");
            g.addEdge("C", "B");
            g.addEdge("C", "E");
            g.addEdge("B", "D");
            g.addEdge("D", "F");
            g.addEdge("E", "F");       
    }else if (level == 3) {
            g.addNode("A", {render:render});
            g.addNode("B", {render:render});
            g.addNode("C", {render:render});
            g.addNode("D", {render:render});
            g.addNode("E", {render:render});
            g.addNode("F", {render:render});

            
            g.addEdge("F", "D");
            g.addEdge("F", "A");
            g.addEdge("F", "C");
            g.addEdge("F", "E");
            g.addEdge("D", "A");
            g.addEdge("D", "B");
            g.addEdge("D", "C");
            g.addEdge("C", "E");
            g.addEdge("C", "A");
            g.addEdge("C", "B");
            g.addEdge("E", "A");
            g.addEdge("B", "A");
        };

    var layouter = new Graph.Layout.Ordered(g, topological_sort(g));

    dijkstra(g, g.nodes["B"]);
    

    floyd_warshall(g, g.nodes["B"]);


    var renderer = new Graph.Renderer.Raphael('canvas', g, width, height);

    redraw = function() {
        layouter.layout();
        renderer.draw();
    };
    showAnswer = function() {
        level = Number(document.getElementById("input_level").value);
        console.log(level);
        if (level == 1) {
            MatrixLen = 4;
            var matrix = [
                [0, arr[arr.length - 5], arr[arr.length - 4], Infinity],
                [Infinity, 0, arr[arr.length - 3], arr[arr.length - 1]],
                [Infinity, Infinity, 0, arr[arr.length - 2]],
                [Infinity, Infinity, Infinity, 0]
            ];
            for (var k = 0; k < MatrixLen; ++k)
                for (var i = 0; i < MatrixLen; ++i)
                    for (var j = 0; j < MatrixLen; ++j)
                        if (matrix[i][k] < Infinity && matrix[k][j] < Infinity)
                            if (matrix[i][k] + matrix[k][j] < matrix[i][j])
                                matrix[i][j] = matrix[i][k] + matrix[k][j];


            var from = 0;
            var to = 3;
            alert( matrix[from][to]);
        } 
        if (level == 2) {
            MatrixLen = 6;
            var matrix = [
                [0, arr[arr.length - 8], arr[arr.length - 7], Infinity, Infinity, Infinity],
                [Infinity, 0, Infinity, arr[arr.length - 6], arr[arr.length - 5], Infinity],
                [Infinity, arr[arr.length - 4], 0, Infinity, arr[arr.length - 3], Infinity],
                [Infinity, Infinity, Infinity, 0, Infinity, arr[arr.length - 2]],
                [Infinity, Infinity, Infinity, Infinity, 0, arr[arr.length - 1]],
                [Infinity, Infinity, Infinity, Infinity, Infinity, 0]
            ];
            for (var k = 0; k < MatrixLen; ++k)
                for (var i = 0; i < MatrixLen; ++i)
                    for (var j = 0; j < MatrixLen; ++j)
                        if (matrix[i][k] < Infinity && matrix[k][j] < Infinity)
                            if (matrix[i][k] + matrix[k][j] < matrix[i][j])
                                matrix[i][j] = matrix[i][k] + matrix[k][j];


            var from = 0;
            var to = 5;
            alert( matrix[from][to]);
        }
        if (level == 3) {
            MatrixLen = 6;
            var matrix = [
                [0, Infinity, Infinity, Infinity, Infinity, Infinity],
                [arr[arr.length - 1], 0, Infinity, Infinity, Infinity, Infinity],
                [arr[arr.length - 4], arr[arr.length - 3], 0, Infinity, arr[arr.length - 5], Infinity],
                [arr[arr.length - 8], arr[arr.length - 7], arr[arr.length - 6], 0, Infinity, Infinity],
                [arr[arr.length - 2], Infinity, Infinity, Infinity, 0, Infinity],
                [arr[arr.length - 11], Infinity, arr[arr.length - 10], arr[arr.length - 12], arr[arr.length - 9], 0],
            ];
            for (var k = 0; k < MatrixLen; ++k)
                for (var i = 0; i < MatrixLen; ++i)
                    for (var j = 0; j < MatrixLen; ++j)
                        if (matrix[i][k] < Infinity && matrix[k][j] < Infinity)
                            if (matrix[i][k] + matrix[k][j] < matrix[i][j])
                                matrix[i][j] = matrix[i][k] + matrix[k][j];


            var from = 0;
            var to = 5;
            alert( matrix[from][to]);
        }
    };

};
function rand1() {
    arr.push(step++)
    return arr[arr.length - 1];
}