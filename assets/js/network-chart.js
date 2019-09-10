$(function() {
    var datascource = {
        'id': '1',
        'name': 'Dead Pool',
        'children': [
            {
                'id': '2', 'name': 'Dead Pool',
                'children': [
                    {
                        'id': '6', 'name': 'Dead Pool',
                        'children': [
                            {
                                'id': '6', 'name': 'Dead Pool',
                                'children': [
                                    { 'id': '6', 'name': 'Dead Pool' },
                                    { 'id': '4', 'name': 'Dead Pool' },
                                    { 'id': '4', 'name': 'Dead Pool' },
                                    { 'id': '4', 'name': 'Dead Pool' },
                                    { 'id': '4', 'name': 'Dead Pool' },
                                    { 'id': '4', 'name': 'Dead Pool' },
                                    { 'id': '4', 'name': 'Dead Pool' },
                                    { 'id': '4', 'name': 'Dead Pool' }

                                ]
                            },
                            { 'id': '4', 'name': 'Dead Pool' }
                        ]
                    },
                    { 'id': '4', 'name': 'Dead Pool' }
                ]
            },
            {
                'id': '3', 'name': 'Dead Pool',
                'children': [
                    {
                        'id': '6', 'name': 'Dead Pool',
                        'children': [
                            { 'id': '6', 'name': 'Dead Pool' },
                            { 'id': '4', 'name': 'Dead Pool' }
                        ]
                    },
                    {
                        'id': '4', 'name': 'Dead Pool',
                        'children': [
                            { 'id': '6', 'name': 'Dead Pool' },
                            { 'id': '4', 'name': 'Dead Pool' }
                        ]
                    }
                ]
            }
        ]
    };

    var network_chart = $('#chart-container').orgchart({
        'data' : datascource,
        'visibleLevel': 999,
        'nodeContent': 'title',
        'nodeID': 'id',
        'createNode': function($node, data) {
            var title = $($node).children()[0];
            var content = $($node).children()[1];
            var siblingContent = `
            <div class="sibling-content">
                <div class="avatar-wrapper">
                    <img class="avatar" src="./assets/images/img1.jpg">
                </div>
                <span class="user-identifier">RA0013310A</span>
            </div>`;
            $(content).append(siblingContent);
            this.onClickNode($node, data);
        },
        'pan': true,
        'zoom': true,
        showControls: true,
        allowEdit: true,
        onAddNode: function (node) { 
                // console.log(node)
            // log('Created new node on node '+node.data.id);
            // network_chart.newNode(node.data.id); 
        },
        onDeleteNode: function(node){
            // log('Deleted node '+node.data.id);
            // network_chart.deleteNode(node.data.id); 
        },
        onClickNode: function (node, data) {
            $(node).click(function () {
                console.log(data);
            });
            // log('Clicked node '+node.data.id);
        }
    });

});