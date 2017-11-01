<template>
  <div>
    <el-container>
      <el-header>
        <h1>Vue + Node CURD增删改查项目</h1>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="20" :offset="1">
            <div class="fr margin40">
              <el-button size="mini" type="primary" icon="el-icon-plus" @click="addDialog = true">添加</el-button>
              <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table :data="result" tooltip-effect="dark" style="width:100%">
              <el-table-column type="selection" width="55" sorttable>

              </el-table-column>
              <el-table-column prop="username" width="100" label="用户名" sorttable>

              </el-table-column>
              <el-table-column prop="name" width="80" label="姓名" sorttable>

              </el-table-column>
              <el-table-column prop="phone" label="手机" sorttable>

              </el-table-column>
              <el-table-column prop="email" label="邮箱" sorttable>

              </el-table-column>
              <el-table-column prop="create_time" label="注册日期" sorttable>

              </el-table-column>
              <el-table-column prop="is_active" label="状态" width="75">
                <template slot-scope="scope">
                  <el-tag type="success">标签</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="250">
                <template slot-scope="scope">
                  <el-button type="success" size="small">编辑</el-button>
                  <el-button type="danger" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-dialog title="添加新用户" :visible.sync="addDialog">
      <el-form :model="addForm" :rules="addRules" ref="addForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="addForm.username" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="addForm.name" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="text" v-model="addForm.password" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="repeat_password">
          <el-input type="text" v-model="addForm.repeat_password" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input type="text" v-model="addForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="addForm.email" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="是否启用">
          <el-switch v-model="addForm.is_active"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button @click="resetForm('addForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name:"Home",
    data(){
        return {
            //用于收集新增用户的对象
            addForm:{
              username:'', //用户名
              name:'', //姓名
              password:'', //密码
              repeat_password:'', //确认密码
              phone:'', //电话
              email:'', //邮箱
              is_active:false //状态
            },
            //添加的对话框
            addDialog:false,
            //编辑的对话框
            editDialog:false,
            result:[
              {
                username:'zhangsan',
                name:'张三',
                phone:'110',
                email:'110@qq.com',
                create_time:'2017年11月11号',
                is_active:'激活'
              },
              {
                username:'lisi',
                name:'李四',
                phone:'110',
                email:'110@qq.com',
                create_time:'2017年11月11号',
                is_active:'激活'
              }
            ]
        }
    },
    methods:{
        resetForm:function(formName){
            //将弹出框关闭
            this.addDialog = false;
            //将弹出框里面的内容清空
            this.$refs[formName].resetFields();
        }
    }
  }
</script>
<style>
  h1 {
    text-align:center;
  }
  .clearfix {
    clear:both;
  }
  .fr {
    float:right;
  }
  .fl {
    float:left;
  }
  .margin40 {
    margin-top:40px;
  }
</style>
