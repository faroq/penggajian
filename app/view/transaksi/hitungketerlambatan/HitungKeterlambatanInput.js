Ext.define('Penggajian.view.transaksi.hitungketerlambatan.HitungKeterlambatanInput', 
    {
        extend          : 'Ext.window.Window',
        title           : 'Validate Process',
        requires        : [
        'Penggajian.view.transaksi.hitungketerlambatan.HitungKeterlambatanController'
        ],
        controller:'hitungketerlambatan',
        
        //        plugins: {
        //            ptype: 'datatip'
        //        },
        width           : 300,
        height          : 150,
        layout          : 'fit',
        autoShow        : true,
        modal           : true,
        alias           : 'widget.hitungketerlambataninput',
        id              : 'hitungketerlambatan_input',
        maximizable     :false,
        closeAction:'destroy',
        items:[
            {
            xtype:'form',
            id:'formhitungketerlambataninput',
            defaults        : {
                allowBlank: false,
                labelAlign: 'left',
                labelWidth: 100
            },
            monitorValid: true,
            url: null ,
            buttonAlign     : 'center',
            padding         : 5,
            style           : 'background-color: #fff;',
            border          : false,
            items:[
                {
                                        xtype: 'monthfield',
                                        name: 'hk_thbl',                                        
                                        //                                        vtype:'daterange',
                                        //                                        startDateField:  'gl_tgl_awal',
                                        afterLabelTextTpl: required_css,
                                        fieldLabel: 'Tahun Bulan',
                                        anchor: '90%',
                                        format:'Y-F'
                                        ,id:'hk_thbl'
//                                        ,listeners:{
//                                            select:function(m, d){
//                                                glthbl=d; m.setValue(glthbl); 
//                                            },
//                                            change:function(m,n,o,opt){
//                                                //                                                m.setValue(new Date(n.getFullYear(),n.getMonth(),1));
//                                                //                                                console.log(n);
//                                                   
//                                                m.setValue(glthbl); 
//                                            },
//                                            writeablechange:function( me, Read, eOpts ){                                                
//                                                me.setValue(glthbl); 
//                                            },
//                                            dirtychange:function( me, isDirty, eOpts ){                                               
//                                                me.setValue(glthbl); 
//                                            }
//                                        }
                                        //                                        ,maxValue:new Date()
                                    }
            ],
            buttons : [
            {
                text: 'Proses',                    
                itemId: 'btnproses',
                id:'idbtnproseshitungketerlambatan',
                iconCls: 'icon-process',
                formBind: true,                       
                handler: 'onProcess'
            },
            {
                text: 'Batal',
                action: 'cancel',
                itemId: 'btncancel',
                iconCls: 'icon-cancel',
                handler: function(me){
                    me.up('window').close();
                }
            }
            ]
            }
        ]
    });