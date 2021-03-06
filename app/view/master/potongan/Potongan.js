Ext.define('Penggajian.view.master.potongan.Potongan', {
    extend: 'Ext.container.Container',
    xtype: 'TabPotongan',
    alias: 'widget.Potongan',
    requires: [
    'Penggajian.view.master.potongan.PotonganController',
    'Penggajian.view.master.potongan.PotonganInput'
    ],
    controller:'potongan',
    title: 'Master Potongan',
    id: 'tab1c',
    closable: true,        
    layout: 'border', 
    items:[       
    {
        xtype:'panel',
        region:'center',
        layout: 'fit',
        bodyPadding: '5 5 5 5',
        items:[
        {
            xtype:'grid',
            id:'idpotonganlist',
            //        store: 'Department',
            store: 'storepotongan',

            columns: [
            {
                xtype: 'actioncolumn',
                header: 'Action',
                menuDisabled: true,
                sortable: false,   
                align:'center',
                width: 85,
                items: [
                {
                    iconCls: 'icon-edit-record',
                    tooltip: 'Edit Row',
                    handler: 'onEditClick' 
                },{
                    getClass: function(v, meta, rec) {
                        return 'icon-delete';
                    },
                    getTip: function(v, meta, rec) {
                        return 'Delete Plant';
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        Ext.Msg.show({
                            title: 'Confirm',
                            msg: 'Are you sure delete selected row ?',
                            buttons: Ext.Msg.YESNO,
                            icon: Ext.Msg.QUESTION,
                            fn: function(btn){
                                if (btn == 'yes') {
                                                                
                                    var data = rec.data;
                                    //data = Ext.JSON.encode(rec.data);
//                                    console.log(data)                                
                                    Ext.Ajax.request({                                                            
                                        url: Penggajian.Global.getApiUrl() + 'potongan/deleteRow',
                                        method: 'POST',
                                        params: {
                                            opt: 'delete',
                                            _token: tokendata,
                                            kode:data.kode
                                        },
                                        success: function(obj) {
                                            var   resp = Ext.decode(obj.responseText);                                                                
                                            if(resp.success==true){
                                                Ext.Msg.show({
                                                    title:'Message Info',
                                                    msg: resp.message,
                                                    buttons: Ext.Msg.OK,
                                                    icon: Ext.Msg.INFO
                                                });
                                                Ext.getCmp('idpotonganlist').store.reload();
                                            }else{
                                                Ext.Msg.show({
                                                    title: 'Error',
                                                    msg: resp.message,
                                                    modal: true,
                                                    icon: Ext.Msg.ERROR,
                                                    buttons: Ext.Msg.OK,
                                                    fn: function(btn){
                                                        if (btn == 'ok' && resp.msg == 'Session Expired') {
                                                            window.location = Penggajian.Global.getApiUrl();
                                                        }
                                                    }
                                                });
                                            }
                                        },
                                        failure: function(obj) {
                                            var  resp = Ext.decode(obj.responseText);
                                            Ext.Msg.alert('info',resp.reason);
                                        }
                                    });                 
                                } 
                            }
                        });
                    }
                }]
                                
            },
            {
                text: 'Kode',  
                dataIndex: 'kode',
                align:'center'
            },
            {
                text: 'Keterangan', 
                dataIndex: 'keterangan', 
                align:'left',
                flex: 1
            }
       
            ],
            tbar:[
            {
                text:'Add',
                iconCls:'icons-add',
                handler:'onClickAdd'
            }],
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                pageSize: 10,
                store: 'storepotongan'
            }
        }
        ]
                
    }
            
    ],
    listeners:{
        show:function(){
            var refstoregrid=Ext.getCmp('idpotonganlist').store;   
            ////                        console.log(refjkstoregrid);
            refstoregrid.loadPage(1);
        //            {params:{start:0,limit:10}}
        }
    }
    

        
    
});