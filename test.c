void print_data(backlog_item_data* data){
  printf("Title: %s\n", data->title);
  printf("Text: %s\n", data->text);
}

void print_for_test(backlog_item_node* head){
  backlog_item_node* current = head;

  while(current != NULL){
    print_data(current->data);
    current = current->next;
  }
}
